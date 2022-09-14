import { PropsWithChildren } from 'react';

export default function QuestionSkelton({ children }: PropsWithChildren<unknown>) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        display: 'block',
        lineHeight: 2,
        padding: '1rem',
        marginBottom: '0.5rem',
        width: 100,
      }}
    >
      {children}
    </div>
  );
}
