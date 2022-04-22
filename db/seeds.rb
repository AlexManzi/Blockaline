s1 = Seeker.create(first_name:'Alex', last_name:'Manzi', email:'alex.manzi22@gmail.com', frontier:'Software Engineer', password_digest:"Alex")
s2 = Seeker.create(first_name:'Moshe', last_name:'Rosenzweig', email:'rosenvibes@gmail.com', frontier:'Software Engineer', password_digest:"Moish")


c1 = Company.create(title:'Flatiron', mission_statement:'We’re committed to helping people learn the skills they need to change their lives and the world for the better.', tags: 'Positive, Upbeat, Fun', rating:5)
c2 = Company.create(title:'Alibaba Group', mission_statement: 'To make it easy to do business anywhere.', tags: 'Positive, Upbeat, Fun', rating:5)
c3 = Company.create(title:'Linkedin', mission_statement:'To connect the world’s professionals to make them more productive and successful.', tags: 'Positive, Upbeat, Fun', rating:5)
c4 = Company.create(title:'Facebook', mission_statement:'To give people the power to share and make the world more open and connected.', tags: 'Positive, Upbeat, Fun', rating:5)
c5 = Company.create(title:'Twitter', mission_statement:'To give everyone the power to create and share ideas and information instantly, without barriers.', tags: 'Positive, Upbeat, Fun', rating:5)
c6 = Company.create(title:'Paypal', mission_statement:'To build the Web’s most convenient, secure, cost-effective payment solution.', tags: 'Positive, Upbeat, Fun', rating:5)
c7 = Company.create(title:'Tesla', mission_statement:'Our goal when we created Tesla a decade ago was the same as it is today: to accelerate the advent of sustainable transport by bringing compelling mass market electric cars to market as soon as possible.', tags: 'Positive, Upbeat, Fun', rating:5)
c8 = Company.create(title:'Kickstarter', mission_statement:'To help bring creative projects to life.', tags: 'Positive, Upbeat, Fun', rating:5)
c9 = Company.create(title:'Asana', mission_statement:'To help humanity thrive by enabling all teams to work together effortlessly.', tags: 'Positive, Upbeat, Fun', rating:5)
c10 = Company.create(title:'Sony', mission_statement:'To be a company that inspires and fulfils your curiosity.', tags: 'Positive, Upbeat, Fun', rating:5)
c11 = Company.create(title:'Microsoft', mission_statement:'To enable people and businesses throughout the world to realize their full potential.', tags: 'Positive, Upbeat, Fun', rating:5)
c12 = Company.create(title:'Google', mission_statement: 'To organize the world’s information and make it universally accessible and useful.', tags: 'Positive, Upbeat, Fun', rating:5)
c13 = Company.create(title:'Intel', mission_statement:'Utilize the power of Moore’s Law to bring smart, connected devices to every person on earth.', tags: 'Positive, Upbeat, Fun', rating:5)


j1 =Job.create( job_frontier:1,title:"Flatiron Ceo", description:"Be a Boss", company:c1, benefits:"Cash", remote:false, hybrid: true, salary: "$200,000", logo: "https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/8/original/flatironschool.png")
j14 =Job.create( job_frontier:4 ,title:"Experience Designer", description:"Be a Boss", company:c4, benefits:"Cash", remote:false, hybrid: true, salary: "$100,000", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6wVKRiAC2KTazQ4wyZkEjgKMRhMdF2D55fp9rpBZjMJ5EKwoQIeer5jEcVosvVBCa3c&usqp=CAU")
j8 =Job.create( job_frontier:1 ,title:"Junior Application Developer", description:"Be a Boss", company:c8, benefits:"Cash", remote:false, hybrid: true, salary: "$160,000", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCqDvPHGNbcewsy19J4JL_Qpk10A2AlVNSnXBwS4YcYf5jcoK98lcch0exUq_TEops2M&usqp=CAU")
j3 =Job.create( job_frontier:3 ,title:"Amazon Ceo", description:"Be a Boss", company:c3, benefits:"Cash", remote:false, hybrid: true, salary: "$220,000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png")
j15 =Job.create( job_frontier:1 ,title:"Solidity Engineer", description:"Be a Boss", company:c5, benefits:"Cash", remote:false, hybrid: true, salary: "$140,000", logo:"https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale")
j5 =Job.create( job_frontier:1 ,title:"Software Engineer I", description:"Be a Boss", company:c5, benefits:"Cash", remote:false, hybrid: true, salary: "$100,000", logo:"https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale")
j6 =Job.create( job_frontier:3 ,title:"Backend Engineer", description:"Be a Boss", company:c6, benefits:"Cash", remote:false, hybrid: true, salary: "$300,000", logo: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-Transparent.png")
j7 =Job.create( job_frontier:1 ,title:"FullStack Engineer", description:"Be a Boss", company:c7, benefits:"Cash", remote:false, hybrid: true, salary: "$130,000", logo: "https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png")
j11 =Job.create( job_frontier:2 ,title:"Data Scientist", description:"Be a Boss", company:c11, benefits:"Cash", remote:false, hybrid: true, salary: "$210,000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png")
j9 =Job.create( job_frontier:2 ,title:"Data Analyst", description:"Be a Boss", company:c9, benefits:"Cash", remote:false, hybrid: true, salary: "$130,000", logo: "https://www.ziflow.com/hubfs/asana_logo.png")
j2 =Job.create( job_frontier:2 ,title:"Alibaba Ceo", description:"Be a Boss", company:c2, benefits:"Cash", remote:false, hybrid: true, salary: "$180,000", logo: "https://appedus.com/wp-content/uploads/2021/04/Alibaba-App-Review-Appedus.png")
j10 =Job.create( job_frontier:2 ,title:"Analytics Engineer", description:"Be a Boss", company:c10, benefits:"Cash", remote:false, hybrid: true, salary: "$210,000", logo: "https://static.wikia.nocookie.net/closinglogogroup/images/3/35/Sony_black_background.jpg/revision/latest?cb=20150522013035")
j12 =Job.create( job_frontier:4 ,title:"UX/Visual Designer", description:"Be a Boss", company:c12, benefits:"Cash", remote:false, hybrid: true, salary: "$170,000", logo: "https://staffordonline.org/wp-content/uploads/2019/01/Google.jpg")
j4 =Job.create( job_frontier:4 ,title:"Facebook Ceo", description:"Be a Boss", company:c4, benefits:"Cash", remote:false, hybrid: true, salary: "$230,000", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6wVKRiAC2KTazQ4wyZkEjgKMRhMdF2D55fp9rpBZjMJ5EKwoQIeer5jEcVosvVBCa3c&usqp=CAU")
j13 =Job.create( job_frontier:4 ,title:"UX Designer", description:"Be a Boss", company:c13, benefits:"Cash", remote:false, hybrid: true, salary: "$130,000", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png")
j16 =Job.create( job_frontier:1 ,title:"Software Engineer II", description:"Be a Boss", company:c6, benefits:"Cash", remote:false, hybrid: true, salary: "$210,000", logo: "https://www.pngall.com/wp-content/uploads/5/PayPal-Logo-Transparent.png")

Application.create(seeker:s1, job:j1, accepted:false)
Application.create(seeker:s2, job:j1, accepted:false)


# how can we iterate this list to seed?
box = ["Acceptance", "Accountability", "Achievement", "Adaptability", "Adventure", "Authenticity", "Authority", "Autonomy", "Balance", "Boldness", "Bravery", "Candor", "Challenge", "Clarity", "Collaboration", "Compassion", "Communication", "Community", "Contribution", "Creativity", "Curiosity", "Dependability", "Determination", "Diversity", "Empathy", "Enthusiasm", "Equality", "Family", "Fairness", "Flexibility", "Friendship", "Growth", "Happiness", "Hard work", "Honesty", "Humility", "Humor", "Impact", "Improvement", "Ingenuity", "Innovation", "Kindness", "Knowledge", "Leadership", "Learning", "Loyalty", "Meaningful work", "Optimism", "Ownership", "Participation", "Patience", "Peace", "Persistence", "Popularity", "Power", "Quality", "Recognition", "Relationships", "Reliability", "Reputation", "Respect", "Responsibility", "Results", "Security", "Self-improvement", "Simplicity", "Spirituality", "Stability", "Success", "Sustainability", "Teamwork", "Tenacity", "Time management", "Transparency", "Trustworthiness", "Wealth", "Wisdom", "Work ethic", "Work-life balance"]
box.each do |b|
    Value.create(title:b)
end

# v1 = Value.create(title:"Autonomy")
# Value.create(title:"Integrity")
# Value.create(title:"Integrity")
# Value.create(title:"Growth")
# Value.create(title:"Service")

# Value.create(title:"Acceptance")
# Value.create(title:"Accountability")
# Value.create(title:"Achievement")
# Value.create(title:"Adaptability")
# Value.create(title:"Adventure")
# Value.create(title:"Authority")
# Value.create(title:"Authenticity")
# Value.create(title:"Balance")
# Value.create(title:"Boldness")

# Value.create(title:"Challenge")
# Value.create(title:"Collaboration")
# Value.create(title:"Compassion")

# Value.create(title:"Communication")
# Value.create(title:"Community")
# Value.create(title:"Creativity")

# Basket.create(seeker:s1, value:v1)