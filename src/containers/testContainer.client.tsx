"use client"
import { useTestStore } from "@/states/testStore"
import React from "react"

const TestContainerClient = () => {
  const { testStr } = useTestStore()
  return (
    <div>
      <p>{testStr}</p>
    </div>
  )
}

export default TestContainerClient
