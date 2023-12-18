import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import * as newsServerActions from '@/store/news/news.actions'
import { actions as newsActions } from '@/store/news/news.slice'

const rootActions = {
  ...newsServerActions,
  ...newsActions,
}

export const useActions = () => {
  const dispatch = useDispatch()



  return useMemo(() =>
    bindActionCreators(rootActions, dispatch)
    , [dispatch])
}