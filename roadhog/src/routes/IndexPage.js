import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
const dataA = $.ajax({
  url: '/index',
  dataType: 'json',
  data: 'ajax请求',
  type: "POST",
  success: function(data) {
      console.log('ajax success，返回值:\n', data)
  }
})
console.log("$.ajax()返回值:" ,dataA)
function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
