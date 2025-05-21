// API utility functions for client components

export async function fetchTestimonials() {
  const response = await fetch("/api/testimonials")
  if (!response.ok) {
    throw new Error("Failed to fetch testimonials")
  }
  return response.json()
}

export async function createTestimonial(testimonial: any) {
  const response = await fetch("/api/testimonials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
  })

  if (!response.ok) {
    throw new Error("Failed to create testimonial")
  }

  return response.json()
}

export async function updateTestimonial(id: number, testimonial: any) {
  const response = await fetch(`/api/testimonials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonial),
  })

  if (!response.ok) {
    throw new Error("Failed to update testimonial")
  }

  return response.json()
}

export async function deleteTestimonial(id: number) {
  const response = await fetch(`/api/testimonials/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete testimonial")
  }

  return response.json()
}

export async function fetchProjects() {
  const response = await fetch("/api/projects")
  if (!response.ok) {
    throw new Error("Failed to fetch projects")
  }
  return response.json()
}

export async function createProject(project: any) {
  const response = await fetch("/api/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })

  if (!response.ok) {
    throw new Error("Failed to create project")
  }

  return response.json()
}

export async function updateProject(id: number, project: any) {
  const response = await fetch(`/api/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  })

  if (!response.ok) {
    throw new Error("Failed to update project")
  }

  return response.json()
}

export async function deleteProject(id: number) {
  const response = await fetch(`/api/projects/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete project")
  }

  return response.json()
}

export async function fetchCarouselImages() {
  const response = await fetch("/api/carousel")
  if (!response.ok) {
    throw new Error("Failed to fetch carousel images")
  }
  return response.json()
}

export async function createCarouselImage(image: any) {
  const response = await fetch("/api/carousel", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  })

  if (!response.ok) {
    throw new Error("Failed to create carousel image")
  }

  return response.json()
}

export async function updateCarouselImage(id: number, image: any) {
  const response = await fetch(`/api/carousel/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(image),
  })

  if (!response.ok) {
    throw new Error("Failed to update carousel image")
  }

  return response.json()
}

export async function updateCarouselOrder(images: any[]) {
  const response = await fetch("/api/carousel", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(images),
  })

  if (!response.ok) {
    throw new Error("Failed to update carousel order")
  }

  return response.json()
}

export async function deleteCarouselImage(id: number) {
  const response = await fetch(`/api/carousel/${id}`, {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to delete carousel image")
  }

  return response.json()
}

export async function fetchSiteContent(section?: string) {
  const url = section ? `/api/content?section=${section}` : "/api/content"
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Failed to fetch site content")
  }

  return response.json()
}

export async function updateSiteContent(section: string, content: any) {
  const response = await fetch("/api/content", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ section, content }),
  })

  if (!response.ok) {
    throw new Error("Failed to update site content")
  }

  return response.json()
}
