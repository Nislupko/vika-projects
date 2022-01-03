declare module 'project-types' {
  export type AppDispatch = typeof import('./helpers/store').default.dispatch;
  export type RootState = ReturnType<typeof import('./helpers/store').default.getState>;
  export type AppCreateAsyncThunkType = { dispatch: AppDispatch; state: RootState };
}
