interface MyButtonProps {
    text: string;
    onClick: () => void;
}

export default function MyButton(props: MyButtonProps) {
    return <button onClick={props.onClick}>{props.text}</button>;
}
