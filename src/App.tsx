import { Test } from 'components/Test';
import { Todo } from 'features/Todo';
import React, { ReactNode, useState } from 'react';
import './App.css';

type Props = {
    onChange?(num: number): void;
    arr?: string[];
    children(num: number): ReactNode;
};

function Header(props: Props) {
    const [state, setState] = useState<number>(0);

    return (
        <div>
            {props.children(state)}

            <button
                onClick={() => {
                    setState(state + 1);
                    props.onChange?.(state);
                }}
            >
                Add
            </button>
        </div>
    );
}

const defaultProps = {
    heading: <h1>heading</h1>,
};

function List<T>({
    heading,
    items,
    renderItem,
}: {
    items: T[];
    renderItem(item: T): ReactNode;
} & typeof defaultProps) {
    return (
        <div>
            {heading}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{renderItem(item)}</li>
                ))}
            </ul>
        </div>
    );
}

List.defaultProps = defaultProps;

type Option = {
    label: string;
    value: string | number;
};

function App() {
    const items: Option[] = [
        { label: 'label 1', value: 123 },
        { label: 'label 2', value: 124 },
    ];

    // Destructuring
    const bob1 = {
        name: 'Bob',
        age: 21,
        gender: 'male',
    };
    const { age, ...rest } = bob1;
    console.log(rest);

    // Swap
    let x = 1;
    let y = 2;
    [x, y] = [y, x];
    console.log(x, y);

    return (
        <div>
            {/* <Typography color={(theme) => theme.palette.secondary.main}>test</Typography>
			<Header onChange={(num) => console.log(num)}>
				{(num) => num}
			</Header>

			<List
				heading={<h2>heading 3</h2>}
				items={items}
				renderItem={(item) => <h2>{item.value}</h2>}
			/> */}
            <Test />

            <Todo />
        </div>
    );
}

export default App;
