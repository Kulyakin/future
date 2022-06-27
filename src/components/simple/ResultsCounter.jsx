import { observer } from 'mobx-react-lite'
import React from 'react'

const ResultsCounter = observer(({ count }) => {
    return <span className="counter">{`Found ${count} results`}</span>
})

export default ResultsCounter
