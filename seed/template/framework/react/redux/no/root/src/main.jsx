import React, { Component } from 'react'
import { render } from 'react-dom'

import Table from './views/game/components/table/table'

render(
    <Table/>,
    document.getElementsByTagName('ss-table')[0]
)
