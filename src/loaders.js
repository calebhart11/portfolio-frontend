const URL = "https://portfolio-backend-14w7.onrender.com"

export const projectsLoader= async () => {
    const response  = await fetch(URL + "/projects")
    const projects = await response.json()
    return projects
}

export const aboutLoader= async () => {
    const response = await fetch(URL + "/about")
    const about = await response.json()
    return about
}