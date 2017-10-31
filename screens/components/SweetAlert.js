import React, { Component } from 'react';

import AwesomeAlert from 'react-native-awesome-alerts';

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import strings from "../../strings/strings"
import GLOBAL from '../../Globals'

export default class SweetAlert extends Component {
    constructor(props) {
        super(props);
    }

    onConfirmSuccess = () => {
        this.props.action('success');
    }

    onCancel = () => {
        this.props.action('cancel');
    }

    render() {
        if (this.props.showAlert.type == 'success') {
            return (
                <AwesomeAlert
                    show={this.props.showAlert.isShow}
                    showProgress={true}
                    title={this.props.showAlert.title}
                    message={this.props.showAlert.messages}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText={strings.cancel}
                    confirmText={strings.ok}
                    confirmButtonColor={GLOBAL.COLOR.SUCCESS}
                    onConfirmPressed={() => {
                        this.onConfirmSuccess();
                    }}
                />
            );
        } if (this.props.showAlert.type == 'warning') {
            return (
                <AwesomeAlert
                    show={this.props.showAlert.isShow}
                    showProgress={false}
                    title={this.props.showAlert.title}
                    message={this.props.showAlert.messages}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText={strings.cancel}
                    confirmText={strings.ok}
                    confirmButtonColor={GLOBAL.COLOR.WARNING}
                    onConfirmPressed={() => {
                        this.onConfirmSuccess();
                    }}
                />
            );
        } if (this.props.showAlert.type == 'error') {
            return (
                <AwesomeAlert
                    show={this.props.showAlert.isShow}
                    showProgress={false}
                    title={this.props.showAlert.title}
                    message={this.props.showAlert.messages}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={false}
                    showConfirmButton={true}
                    cancelText={strings.cancel}
                    confirmText={strings.ok}
                    confirmButtonColor={GLOBAL.COLOR.CANCEL}
                    onConfirmPressed={() => {
                        this.onConfirmSuccess();
                    }}
                />
            );
        } else {
            return (
                <AwesomeAlert
                    show={this.props.showAlert.isShow}
                    showProgress={false}
                    title={this.props.showAlert.title}
                    message={this.props.showAlert.messages}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            );
        }

    }
}
