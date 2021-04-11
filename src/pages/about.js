import React from 'react';
import firebase from 'firebase';
import { Formik, Form } from 'formik';
import { Button, Modal } from 'antd';
import styled from 'styled-components';

import config from '../config/config';
import NormalUserDataViewAndEdit from '../components/NormalUserDataViewAndEdit';
import initFormikValues from '../utils/initFormikValues';
import getValidationSchema from '../utils/getValidationSchema'

const Frame = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px 15px;
  .ant-btn.ant-btn-circle{
    width: 160px;
    height: 160px;
    border-width: 15px;
    font-size: 2.5em;
  }
  .ant-btn-block,.ant-input,.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    min-height: 45px;
    font-size: 1.2em;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item{
    line-height: 45px
  }
  .ant-select-item{
    min-height: auto;
    padding: 20px 10px;
    font-size: 1.2em;
  }
`;

// sheet.best
// const submitHandler = data => {
//   axios.post('https://sheet.best/api/sheets/b1eb45ec-9827-4eea-a012-8d173d9d4393', data)
//     .then(response => {
//       const { personnel, project, startDate, startTime, endDate, endTime } = response?.data[0]
//       Modal.success({
//         content: `${personnel} ${project} ${startDate}${startTime}${endDate}${endTime} `,
//       });
//     })
// }

// firebase
const firebaseSubmitHandler = (personnelNumber, data) => {

  if (!firebase.apps.length) {
    const app = firebase.initializeApp(config);

    const database = app.database()

      database.ref(`/personnel/personnelNumber${personnelNumber}`).push(data)
        .then(function () {
          const { personnel, project, startDate, startTime, endDate, endTime } = data
          Modal.success({
            content: `${personnel} ${project} ${startDate}${startTime}${endDate}${endTime} `,
          });
        }).catch(function () {
          alert("伺服器發生錯誤，請稍後再試");
        });
  }
  else {
    const app = firebase.app();
  }
}
function Hrm(props) {
  // 取得路由上使用者 id
  // const personnelNumber = props.match.params.id
  const personnelNumber = 'gzybfooy8brj2021'
  
  return (
    <Frame>
      <Formik
        initialValues={initFormikValues()}
        validationSchema={getValidationSchema}
        onSubmit={values => {
          firebaseSubmitHandler(personnelNumber, values)
        }}
      >
        {formikProps => {
          const {startDate, endDate} = formikProps.values
          return (          
            <Form>
              <NormalUserDataViewAndEdit personnelNumber={personnelNumber} />
              <Button block type="primary" disabled={!startDate && !endDate} htmlType="submit">
                送出
            </Button>
            </Form>
          )
        }}
      </Formik>
      <footer>果匠設計</footer>
    </Frame>
  );
}
export default Hrm;