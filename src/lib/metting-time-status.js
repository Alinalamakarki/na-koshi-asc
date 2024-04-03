import {
  format,
  isBefore,
  isAfter,
  differenceInMinutes,
  formatDistanceToNow,
  parse,
} from 'date-fns';

// Constants
const MEETING_TIME_FORMAT = 'yyyy-MM-dd hh:mm a';
const MINUTES_BEFORE_MEETING_START_TO_NOTIFY = 30;
const MINUTES_BEFORE_MEETING_END_TO_NOTIFY = 5;

// Utility functions
function parseDateTime(date, time) {
  return parse(`${date} ${time}`, MEETING_TIME_FORMAT, new Date());
}

function formatDateTime(date, time) {
  return format(date, MEETING_TIME_FORMAT) + ` ${time}`;
}

export function checkMeetingStatus(meeting) {
  const today = new Date();
  const dayOfWeek = format(today, 'EEEE').toLowerCase();

  // Check if today is the day of the meeting
  if (meeting.day.toLowerCase() !== dayOfWeek) {
    return { message: 'No meeting today.', remainingTime: null, live: 0 };
  }

  const startTime = parseDateTime(
    format(today, 'yyyy-MM-dd'),
    `${meeting.from} ${meeting.time}`,
  );
  const endTime = parseDateTime(
    format(today, 'yyyy-MM-dd'),
    `${meeting.to} ${meeting.time}`,
  );

  // Check meeting status
  if (isBefore(today, startTime)) {
    const remainingTime = differenceInMinutes(startTime, today);
    if (remainingTime <= MINUTES_BEFORE_MEETING_START_TO_NOTIFY) {
      return {
        message: `Meeting starts in ${remainingTime} minutes.`,
        remainingTime,
        live: 1,
      };
    }
    const remainingTimes = formatDistanceToNow(startTime, {
      includeSeconds: true,
    });
    return {
      message: `${remainingTimes} remain until meeting starts.`,
      remainingTime: remainingTimes,
      live: 1,
    };
  } else if (isAfter(today, endTime)) {
    return { message: 'Meeting has ended.', remainingTime: null, live: 0 };
  } else {
    const remainingTime = differenceInMinutes(endTime, today);
    const remainingTimes = formatDistanceToNow(endTime, {
      includeSeconds: true,
    });
    if (remainingTime <= MINUTES_BEFORE_MEETING_END_TO_NOTIFY) {
      return {
        message: `Meeting ends in ${remainingTime} minutes.`,
        remainingTime: remainingTimes,
        live: 3,
      };
    }
    return {
      message: 'Meeting is ongoing.',
      remainingTime: remainingTimes,
      live: 2,
    };
  }
}
