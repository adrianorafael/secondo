import React from 'react'
import {withRedux} from '../../lib/redux'
import Centered from '../../layouts/centered'

const Index = () => (
  <Centered>
  <p className="text-secondary mb-4 text-center">
  Build 0.0.16
  </p>
</Centered>
)
export default withRedux(Index)
