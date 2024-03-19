import React from 'react';

export default function Table({ data }) {
  return (
    <div className="bg-gray-400 grid grid-cols-1 divide-y text-black">
      {data.response.map((fixture, index) => (
        <div key={index} className="bg-white py-2">
          <div align="center">
            <img
              src={fixture.league.logo}
              width={25}
              alt={fixture.league.name}
            />
            {fixture.league.name}
          </div>

          <div className="text-center">{fixture.fixture.status.long}</div>

          <div className="w-full flex p-1">
            <div className="w-[10%]" align="center">
              <img
                src={fixture.teams.home.logo}
                width={30}
                alt={fixture.teams.home.name}
              />
            </div>
            <div className="w-[32%] text-right">
              {fixture.teams.home.name}
            </div>
            <div className="w-[16%] text-center">{/* Hier fehlt noch etwas */}</div>
            <div className="w-[32%]" align="center">
              <img
                src={fixture.teams.away.logo}
                width={30}
                alt={fixture.teams.away.name}
              />
            </div>
            <div className="w-[32%] text-left">
              {fixture.teams.away.name}
            </div>
            <div className="w-[16%] text-center">{/* Hier fehlt noch etwas */}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
