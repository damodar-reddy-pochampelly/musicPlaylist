import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 18px;
  height: 18px;
  color: #ffffff;
  margin-left: 30px;
`

export const TrackItem = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-right: 30px;
`
export const TrackItemContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TrackImage = styled.img`
  width: 200px;
  margin-right: 20px;
`

export const TrackTitleContainer = styled.div``

export const TrackTitle = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
`
export const TrackGenre = styled(TrackTitle)`
  color: #3b82f6;
`
export const TrackLength = styled(TrackTitle)``

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`
