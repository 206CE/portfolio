
{/*

* Team.tsx
* This component displays a team section with member profiles.
* It uses Tailwind CSS for styling and Next.js Image component for optimized images.
* Ensure you have the necessary environment variables set up.
* For more information, visit: https://nextjs.org/docs/api-reference/next/image

  */}

{/* Version: 1.0.0
  

  
  */}  

import React  from 'react';
import Image from 'next/image';

/*team = [
    {
      name: "Samantha Koch",
      role: "Chief Excecutive Officer",
      bio: "10+ years in tax compliance and dispute resolution with SARS.",
      imageUrl: "/Samantha_Koch.jpg"
    }
    , {
      name: "Lorinda Deysel",
      role: "Chief Financial Officer",
      bio: "Extensive experience in Business Operations",
      imageUrl: "/Lorinda_Deysel.jpg"}]
      */




// Define team member interface
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  imageAlt?: string;

}

interface TeamMembersProps {
  team: TeamMember[];
}

const Team: React.FC<TeamMembersProps> = ({ team }) => {
  return (
    <section className="py-16 " aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          id="team-heading" 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Meet Our Experts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="text-center transition-all duration-300 hover:shadow-2xl rounded-lg overflow-hidden"
            >
              {/* Circular Profile Image */}
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-100">
                <Image
                  src={member.imageUrl}
                  alt={member.imageAlt || `${member.name}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold mt-4 mb-1">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm mb-4 px-4">{member.bio}</p>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;