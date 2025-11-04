
import Card from "./components/Card";


const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Software Engineer Intern",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$25/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Solutions Architect",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "Data Analyst",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI Research Intern",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "1 month ago",
    post: "Prompt Engineer",
    tag: "Full Time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://s3.amazonaws.com/freebiesupply/large/2x/adobe-logo-transparent.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India"
  }
];
console.log(jobOpenings);


  return (
    <div className="parent">
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} tag1={elem.tag} tag2={elem.tag2} pay={elem.pay} location={elem.location} datePosted={elem.datePosted} Logo={elem.brandLogo} />
        </div>
      })}
    
     
    </div>
  );
};
export default App;
