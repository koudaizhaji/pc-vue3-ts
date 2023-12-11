import useLoginStore from '@/stores/login/login'

function usePermission(pageName: string, handleName: string) {
  const queryPermission = `${pageName}:${handleName}`
  console.log('usePermission', queryPermission)
  const permissions = useLoginStore().permissions
  return !!permissions.find((item) => item.includes(queryPermission))
}

export default usePermission
