interface PlayerProps {
    name: string;
}

export function Player({ name }: PlayerProps) {
    return (
        <div>
            <span>Name {name}</span>
        </div>
    )
}