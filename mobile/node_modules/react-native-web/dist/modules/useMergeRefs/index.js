/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
import * as React from 'react';
import mergeRefs from '../mergeRefs';
export default function useMergeRefs() {
  // TODO(memoize) #1755
  return (
    /*React.useMemo(() => */
    mergeRefs.apply(void 0, arguments)
    /*, [args])*/

  );
}