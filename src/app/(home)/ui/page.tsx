'use client';
import { Button } from '@nextui-org/react';
import action from './action';

export default function UiPage() {
  const revalidate = () => {
    action();
  };
  return (
    <div>
      <Button onClick={revalidate}>reload</Button>
    </div>
  );
}
