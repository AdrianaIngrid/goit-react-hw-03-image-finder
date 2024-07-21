import React, { Component } from "react";
import styles from './Modal.module.css';
import * as basicLightbox from 'basiclightbox';
export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const { image } = this.props;
        return (
          <div className={styles.Overlay}>
            <dialog claddName={styles.Modal}>
              <img src={image.largeImageURL} alt="" width = "800" height="600"/>
            </dialog>
          </div>
        );
    }
}