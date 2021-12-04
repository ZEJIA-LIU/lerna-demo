import { add } from "../../package-a/lib/package-a";

import React from 'react'

function b() {
    console.log('add', add)
    console.log(React, 'react')
    return add(1, 2)
}

export { b }