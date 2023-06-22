
describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  context("Hero Section", ()=>{
    it.only('passes', () => {
      cy.getByData('hero-heading')
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")  
    })
  
    it("Features on the homepage are correct", ()=>{
      cy.get("dt").eq(0)
        .contains("4 Courses")
      cy.get("dt").eq(1)
        .should("exist")
        .contains("25+ Lessons")
      cy.get("dt").eq(2)
        .should("exist")
        .contains("Free and Open Source")
    })
  })

  context("Course Section", ()=>{
    it("Course: Testing Your First Next.js Application", ()=>{
      cy.getByData("course-0").find("a").eq(3).click()
    })

    it("Testing Foundations", ()=>{
      cy.getByData("course-1").find("a").eq(3).click()
    })

    it("course: Cypress Fundamentals", ()=>{
      cy.getByData("course-2").find("a").eq(3).click()
    })
  })
})