import React from "react";
import { inject, observer } from 'mobx-react';

import { AppStore } from 'commons/stores';

import styles from './styles.module.css'

interface Props {
  store?: AppStore
}

function App(props: Props) {
  return (
    <div className={styles.root}>
      <main className={styles.main}>
      </main>
    </div>
  )
}

export default inject('store')(observer(App))