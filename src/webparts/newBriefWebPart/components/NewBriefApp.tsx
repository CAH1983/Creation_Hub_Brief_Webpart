import * as React from 'react';
import styles from './NewBriefWebPart.module.scss';
import { INewBriefWebPartProps } from './INewBriefWebPartProps';
import MainForm from './Form/MainForm';

export default class NewBriefWebPart extends React.Component<INewBriefWebPartProps, {}> {
  public render(): React.ReactElement<INewBriefWebPartProps> {
    return (
      <div className={ styles.newBriefWebPart }>
        <div className={ styles.container }>
          <h1>Submit A New Brief </h1>
         {/* header */}

         {/* form */}
         <MainForm />

         {/* buttons */}



        </div>
      </div>
    );
  }
}
