import React from 'react';

interface IMainActionButtonProps {
  text: String;
  onClick: () => void;
}

export default function MainActionButton(props: IMainActionButtonProps) {
  return (
    <button
      className="py-6 bg-transparent text-2xl text-black border border-black px-12 my-4 hover:bg-black/10"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
