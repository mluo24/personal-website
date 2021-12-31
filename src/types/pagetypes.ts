export interface ChildrenPageTypes {
  children: JSX.Element
}

export interface ProjectCardType extends ChildrenPageTypes {
  title: string
  year: number
  tools: string[]
  githubLink: string
}

export interface ProjectGridType {
  projects: ProjectCardType[]
}
