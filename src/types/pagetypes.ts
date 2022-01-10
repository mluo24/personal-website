export interface ChildrenPageTypes {
  children: JSX.Element
}

export interface MDXQueryNodeTypes {
  body: string
  id: string
}

export interface ProjectCardType extends MDXQueryNodeTypes {
  frontmatter: {
    title: string
    year: string
    technologies: string[]
    githubLink: string
    link?: string
  }
}

export interface ProjectGridType {
  projects: ProjectCardType[]
}

export interface TimelineBlockType extends MDXQueryNodeTypes {
  frontmatter: {
    startDate: string
    endDate: string
    role: string
    isCurrent: boolean
    title: string
    companyUrl?: string
  }
}

export interface TimelineType {
  jobs: TimelineBlockType[]
}
