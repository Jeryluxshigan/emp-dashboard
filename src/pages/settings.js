import React from "react";
import { Button } from "antd";
import { Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {  message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function Settings() {
  const settings = "Manage your personal and team settings here.";
  return (
    <div className="main-card">
      <div className="welcome"> {settings} </div>
      <div className="section">
        <div className="profile-card2">
          <div className="sub-sec-1">
            <div className="sub1">
              <div className="settings-title1"> Account Settings</div>
              <div className="context1">
                View and update the information about yourself.
              </div>
            </div>
            <div className="sub2">
              <Button className="default">Cancell</Button>
              <Button type="primary" className="edit">
                View Account
              </Button>
            </div>
          </div>
          <div className="sub-sec-2">
            <div className="sub1">
              <div className="settings-title1"> Billing Info</div>
              <div className="context1">
                View and update the Billing information.
              </div>
            </div>
          </div>
          <div className="sub-sec-2">
            <div className="sub1">
              <div className="bill-title-sec">
                <div className="bill-period">Billing Period </div>
                <div className="change">Change </div>
              </div>
              <div className="billing-card">
                Monthly
                <div className="renewal">Next renewal: 25 NOV 2024</div>
              </div>
              <div className="bill-title-sec">
                <div className="bill-period">Payment Method </div>
                <div className="change">Change </div>
              </div>
              <div className="billing-card">
                **** **** *3897
                <div className="renewal">Expairs on: 25 NOV 2024</div>
              </div>
            </div>
            <div className="sub2">
              <div className="bill-period"> Billing Info </div>
              <div className="form-sub1">
                <div className="field1">
                <div className="bill-period"> Billing Address </div>
                <Input placeholder="Basic usage" className="placeholder" />
                </div>
                <div className="field1">
                <div className="bill-period"> Company Name </div>
                <Input placeholder="Basic usage"  className="placeholder"/>
                </div>
              </div>
              <div className="form-sub1">
                <div className="field1">
                <div className="bill-period"> Country </div>
                <Input placeholder="Basic usage" className="placeholder" />
                </div>
                <div className="field1">
                <div className="bill-period"> VAT Number </div>
                <Input placeholder="Basic usage"  className="placeholder"/>
                </div>
              </div>
              <div className="form-sub1">
                <div className="field1">
                <div className="bill-period"> Email Address </div>
                <Input placeholder="Basic usage" className="placeholder" />
                </div>
                <div className="field1">
                <div className="bill-period"> Company Address </div>
                <Input placeholder="Basic usage"  className="placeholder"/>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-sec-">
            <div className="sub1">
              <div className="settings-title1"> Upload Receipt</div>
              <div className="context1">
                Upload  your payment receipt here. The image should be clear and legible.
              </div>
            
            <Upload {...props} >
    <Button className="upload">Click to Upload</Button>
  </Upload>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
