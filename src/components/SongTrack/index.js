import {
  TrackItem,
  TrackItemContainer,
  TrackImage,
  TrackTitleContainer,
  TrackGenre,
  TrackTitle,
  TrackLength,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const SongTrack = props => {
  const {trackDetails, onDeleteTrack} = props
  const {name, imageUrl, genre, duration, id} = trackDetails

  const onClickDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <TrackItem>
      <TrackItemContainer>
        <TrackImage src={imageUrl} alt="track" />
        <TrackTitleContainer>
          <TrackTitle>{name}</TrackTitle>
          <TrackGenre>{genre}</TrackGenre>
        </TrackTitleContainer>
      </TrackItemContainer>
      <TrackItemContainer>
        <TrackLength>{duration}</TrackLength>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <DeleteIcon />
        </DeleteButton>
      </TrackItemContainer>
    </TrackItem>
  )
}

export default SongTrack
