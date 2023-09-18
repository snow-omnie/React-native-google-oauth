import 'react-native'
import React from 'react'
import PostDetails from '../PostDetails'
import renderer from 'react-test-renderer'

test('Post details snapShot', () => {
    const snap = renderer.create(<PostDetails />).toJSON();

    expect(snap).toMatchSnapshot()
})