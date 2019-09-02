import React from "react"
import Header from "../components/header"

export default () => (
  <>
    <Header
      workshopNumber={4234}
      newProperty={"Testing"}
    />
    <div
      style={{ color: "red" }}
    >
      Hello SwahiliBox!
    </div>
  </>
)
