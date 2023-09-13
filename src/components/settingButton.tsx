'use client'

import { SegmentedControl } from '@mantine/core';

type settingButtonProps = {
    data: { label: string, value: string }[];
    onChange: (value: string) => void;
    value: string;

}


export default function SettingButton(props: settingButtonProps) {
    return (
        <div>

            <SegmentedControl
                data={props.data}
                fullWidth
                onChange={props.onChange}
                value={props.value}
                size='xs'
                transitionDuration={500}
                radius="md"
                orientation='horizontal'
                classNames={{
                    label: 'text-xs font-mono font-semibold',
                    control: "",
                    root: "",
                    input: "",
                    controlActive: "",
                    indicator: "bg-rose-400"
                }}
            />
        </div>

    )
}