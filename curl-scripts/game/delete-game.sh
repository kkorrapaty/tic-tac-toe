curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
