// components/FormContainer.js
import React from 'react';
import styles from './FormContainer.module.css';

const FormContainer = () => {
    return (
        <div className={styles['form-container']}>
            <h2 className={styles['form-title']}>Contact Us</h2>
            <form className={styles.form}>
                <div className={styles['form-group']}>
                    <label htmlFor="textarea" className={styles.label}>Name</label>
                    <input required="" name="text" id="text" type="text" className={styles.input} />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input required="" name="email" id="email" type="text" className={styles.input} />
                </div>
                <div className={styles['form-group']}>
                    <label htmlFor="textarea" className={styles.label}>How Can We Help You?</label>
                    <textarea required="" cols="50" rows="10" id="textarea" name="textarea" className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles['form-submit-btn']}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormContainer;
