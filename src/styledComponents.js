import styled from 'styled-components'
import {BiSearch} from 'react-icons/bi'

export const SearchIcon = styled(BiSearch)`
  width: 15px;
  height: 15px;
  color: #ffffff;
`

export const TopContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 50px;
  padding-bottom: 20px;
`
export const SingerName = styled.h1`
  font-family: 'Roboto';
  font-size: 32px;
  color: #ffffff;
  margin-bottom: 10px;
`
export const SingerText = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const BottomContainer = styled.div`
  background-color: #152850;
  padding: 20px 30px;
  min-height: 50vh;
`
export const SongsPlaylistTitle = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: normal;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const InputContainer = styled.div`
  border: 1px solid #cbd5e1;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 2px 5px;
`
export const InputElement = styled.input`
  border: none;
  outline: none;
  font-family: 'Roboto';
  background-color: transparent;
  color: #ffffff;
  font-size: 15px;
`
export const SongsListContainer = styled.ul`
  padding-left: 0px;
  margin-top: 50px;
`

export const NoSongsFoundText = styled.p`
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-top: 15vh;
`
