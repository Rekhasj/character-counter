const CharacterCount = prop => {
  const {characterDetails} = prop
  const {userEnteredCharacter, textLength} = characterDetails

  return (
    <>
      <li>
        <p>
          {userEnteredCharacter}:{textLength}
        </p>
      </li>
    </>
  )
}
export default CharacterCount
