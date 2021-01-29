import * as React from 'react';
import styles from '../NewBriefWebPart.module.scss';
import { IStackTokens, Stack, IStackProps, IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import PeoplePickerListExample from './PeoplePicker';


// Styling
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
};

// Dropdown menu options
const options: IDropdownOption[] = [
    { key: 'A', text: 'option A' },
    { key: 'B', text: 'option B' },
    { key: 'C', text: 'option C' },
    { key: 'D', text: 'option D' },
];

// React Component for the main form
function MainForm(props: any) {
    return(
        <Stack className={styles.formcontainer}>
                <div>
                    <Label required> Brief Submitted By </Label>
                    <PeoplePickerListExample/>
                </div>

                <Dropdown
                    placeholder="Select an option"
                    label="Your Station"
                    options={options}
                    styles={dropdownStyles}
                />

                <div>
                    <Label required> Brief Name </Label>
                    <TextField id="briefname-input" />
                </div>





        </Stack>
    )
}

export default MainForm;