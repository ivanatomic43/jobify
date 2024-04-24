import React, { useCallback } from 'react'
import { StyleSheet } from 'react-native'

//import { ContentTitle } from './content-title'

import { ContentImage, Pressable, Separator, Text } from '../components'
//import useNavigate from '../../hooks/useNavigate'
import { ShowJobDto, ContentType} from '../types/content-types'
import Title from './Title'

interface JobCardProps {
  type: ContentType.job
  data: ShowJobDto
}


export type ContentCardProps = JobCardProps

const ContentCard: React.FC<ContentCardProps> = props => {
  const { type, data } = props

  //const { navigateToRecipe, navigateToWorkout, navigateToTip } = useNavigate()

  // const onPress = useCallback(() => {
  //   switch (type) {
  //     case ContentType.job:
  //       navigateToJob(data.id)
  //       return
  //   }
  // }, [type, navigateToJob, data])

  return (
    <Pressable
      style={styles.container}
    //onPress={onPress}
    >
      <Title title={data.name} />
      <Text type="body.medium" color='app.secondary'>Salary: {data.salary} $</Text>
      <Separator height={7} />
      <ContentImage
        width={'100%'}
        imageUri={data.imageUrl}

      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    opacity: 1,
  },
})

export default ContentCard
