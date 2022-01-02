export interface ChildrenPageTypes {
  children: JSX.Element
}

export interface ProjectCardType extends ChildrenPageTypes {
  frontmatter: {
    title: string
    year: number
    technologies: string[]
    githubLink: string
  }
  html: string
  id: string
}

export interface ProjectGridType {
  projects: ProjectCardType[]
}

export interface TimelineBlockType {
  frontmatter: {
    startDate: string
    endDate: string
    role: string
    isCurrent: boolean
    title: string
    companyUrl?: string
  }
  html: string
  id: string
}

export interface TimelineType {
  jobs: TimelineBlockType[]
}
