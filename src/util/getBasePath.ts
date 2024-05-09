export const getBasePath = () => {
    const resourceName = GetCurrentResourceName()
    const resourcePath = GetResourcePath(resourceName)

    return resourcePath.replace(/(\/|\\)(\/|\\)/g, '$1')
}
