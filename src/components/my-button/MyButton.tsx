interface MyButtonProps {
    text: string;
}

export default function MyButton(props: MyButtonProps) {
    return (
        <button>{props.text}</button>
    )
}