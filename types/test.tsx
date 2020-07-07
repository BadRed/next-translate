import React from 'react'
import { useTranslation, withTranslation, Trans } from '.'

interface TestProps {
  test: string
}

class Test extends React.Component<TestProps> {
  render() {
    return <span>Test</span>
  }
}

const { t } = useTranslation()
const TranslatedTest = withTranslation(Test)

//TODO: fix
function TestContainer() {
  return <TranslatedTest test="asd" />
}

function TransTestContainer() {
  return <Trans i18nKey="blah" components={[<br />]} values={{ test: 1 }} />
}
