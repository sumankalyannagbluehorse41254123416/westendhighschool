import Image from "next/image";

export default function SportsPage() {
  return (
    <div className="inner_con">
      <p>
        <span style={{ fontFamily: "andale mono, times", fontSize: "large" }}>
          Much stress is raid upon games and sports . In fact the participation
          ofthe srudents in games, sports and physical exercise ls compulsorv.
          There is a body trained personel which takes care of this part of
          educarion in this institutition .Under the supervision of qualified
          instructors and trainers students are taught driils . parades and
          phvsical exercises . The school has play grounds of its own . Foot ball
          , cricket . volley ball basket ball and Badminton are played here .
          Facilities are also available for popular indoor games like
          table-tennis , carrom etc. The annual spotrs meet, foot ball and
          cricket tournaments are conducted class wise/hose wise.
        </span>

        <Image
          className="alignnone size-medium wp-image-185"
          style={{ verticalAlign: "baseline" }}
          src="/images/28-10-300x225.jpg"
          alt=""
          width="500"
          height="325"
        />
      </p>
    </div>
  );
}
