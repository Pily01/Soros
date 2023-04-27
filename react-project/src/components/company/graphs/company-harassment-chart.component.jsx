import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const HarassmentChart = ({experiencedFrequency, witnessedFrequency}) => {

    const data = [
        {
          name: 'Rare',
          experienced: experiencedFrequency["rare"],
          witnessed: witnessedFrequency["rare"],
        },
        {
          name: 'Sometimes',
          experienced: experiencedFrequency["sometimes"],
          witnessed: witnessedFrequency["sometimes"],
        },
        {
          name: 'Often',
          experienced: experiencedFrequency["often"],
          witnessed: witnessedFrequency["often"],
        },
        {
          name: 'Always',
          experienced: experiencedFrequency["always"],
          witnessed: witnessedFrequency["always"],
        },
      ];
    
    return(
        <ResponsiveContainer width="100%" height={400}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="experienced" fill="#83BCC7" />
              <Bar dataKey="witnessed" fill="#087990" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default HarassmentChart;