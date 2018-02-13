import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import syntaxStyle from './syntaxStyle'
import styles from './App.css'

const App = props => (
    <div>
        <SyntaxHighlighter language='javascript' style={syntaxStyle}>
            {`const Chromy = require('chromy')
let chromy = new Chromy({visible:true})

chromy.chain()
${props.recording.reduce((records, record, i) => {
                const {action, url, selector, value} = record
                let result = records
                if (i !== records.length) result += '\n'

                switch (action) {
                    case 'change':
                        result += `.type('${selector}', '${value}')`
                        break
                    case 'click':
                        result += `.click('${selector}')`
                        break
                    case 'goto':
                        result += `.goto('${url}')`
                        break
                }

                return result
            }, '')}
    .evaluate(() => {
        return document.querySelectorAll('*').length
    })
    .result((r) => console.log(r))
    .end()
    .then(() => chromy.close())`}
        </SyntaxHighlighter>

        <button className={styles.button} onClick={props.handleRestart}>Restart</button>
    </div>
)

App.displayName = 'App'

export default App
