import { Component, OnInit } from '@angular/core';
import { SearchedWorkout } from 'src/app/interface/workout.interface';
import { ExerciseHttpService } from 'src/app/services/exercise-http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  result: SearchedWorkout[] = [
    {
      "name": "Single-arm kettlebell push-press",
      "type": "strength",
      "muscle": "shoulders",
      "equipment": "kettlebells",
      "difficulty": "intermediate",
      "instructions": "Hold a kettlebell by the handle. Clean the kettlebell to your shoulder by extending through the legs and hips as you pull the kettlebell towards your shoulder. Rotate your wrist as you do so, so that the palm faces forward. This will be your starting position. Dip your body by bending the knees, keeping your torso upright. Immediately reverse direction, driving through the heels, in essence jumping to create momentum. As you do so, press the kettlebell overhead to lockout by extending the arms, using your body's momentum to move the weight. Lower the weight to perform the next repetition."
    },
    {
      "name": "Push-press",
      "type": "olympic_weightlifting",
      "muscle": "quadriceps",
      "equipment": "barbell",
      "difficulty": "intermediate",
      "instructions": "Beginning Position:  Use the floor-to-shoulder lifting technique described in the Power Clean exercise to move the bar from the floor to the shoulders.  Upward Movement Phase:  Slightly flex the hips and knees, keeping torso erect. Immediately follow with an explosive push upward by extending the knees. Keep torso erect and tensed. At maximum hip and knee extension, shift body weight to balls of feet and extend ankle joints. At maximum plantar flexion, push bar from the shoulders. Push the bar with the arms to a fully extended elbow position overhead.  Downward Movement Phase:  Lower bar to shoulders. Flex hips and knees slightly as bar touches shoulders. Straighten the hips and knees before the upward movement phase begins again.  Breathing:  Exhale through the sticking point of the upward movement phase. Inhale during the downward movement phase."
    },
    {
      "name": "Pushups",
      "type": "strength",
      "muscle": "chest",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more."
    },
    {
      "name": "Single Leg Push-off",
      "type": "plyometrics",
      "muscle": "quadriceps",
      "equipment": "other",
      "difficulty": "beginner",
      "instructions": "Stand on the ground with one foot resting on the box, heel close to the edge. Push off with your foot on top of the box, trying to gain as much height as possible by extending through the hip and knee. Land with the same foot on top of the box, returning your other foot back to the start position."
    },
    {
      "name": "Cable V-bar push-down",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Attach a V-Bar to a high pulley and grab with an overhand grip (palms facing down) at shoulder width. Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the bar. The thumbs should be higher than the small finger. This is your starting position. Using the triceps, bring the bar down until it touches the front of your thighs and the arms are fully extended perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After a second hold at the contracted position, bring the V-Bar slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a straight cable bar attachment for different variations of the exercise. Also, you can attach a rope to the pulley as well as using a reverse grip on the bar exercises. Just like the Triceps Pushdown but with the V-Bar attachment."
    },
    {
      "name": "Reverse Grip Triceps Pushdown",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "cable",
      "difficulty": "intermediate",
      "instructions": "Start by setting a bar attachment (straight or e-z) on a high pulley machine. Facing the bar attachment, grab it with the palms facing up (supinated grip) at shoulder width. Lower the bar by using your lats until your arms are fully extended by your sides. Tip: Elbows should be in by your sides and your feet should be shoulder width apart from each other. This is the starting position. Slowly elevate the bar attachment up as you inhale so it is aligned with your chest. Only the forearms should move and the elbows/upper arms should be stationary by your side at all times. Then begin to lower the cable bar back down to the original staring position while exhaling and contracting the triceps hard. Repeat for the recommended amount of repetitions.  Variation: This exercise can also be performed with a single handle using one arm at a time. This will allow you to better isolate the triceps. With this version you can self spot yourself by placing your hand over your forearm and applying some pressure to help you perform more reps than before."
    },
    {
      "name": "Push-Ups - Close Triceps Position",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Lie on the floor face down and place your hands closer than shoulder width for a close hand position. Make sure that you are holding your torso up at arms' length. Lower yourself until your chest almost touches the floor as you inhale. Using your triceps and some of your pectoral muscles, press your upper body back up to the starting position and squeeze your chest. Breathe out as you perform this step. After a second pause at the contracted position, repeat the movement for the prescribed amount of repetitions.  Variations:  If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance.  See Also: Push-Up"
    },
    {
      "name": "Triceps Pushdown - Rope Attachment",
      "type": "strength",
      "muscle": "triceps",
      "equipment": "None",
      "difficulty": "intermediate",
      "instructions": "Attach a rope attachment to a high pulley and grab with a neutral grip (palms facing each other). Standing upright with the torso straight and a very small inclination forward, bring the upper arms close to your body and perpendicular to the floor. The forearms should be pointing up towards the pulley as they hold the rope with the palms facing each other. This is your starting position. Using the triceps, bring the rope down as you bring each side of the rope to the side of your thighs. At the end of the movement the arms are fully extended and perpendicular to the floor. The upper arms should always remain stationary next to your torso and only the forearms should move. Exhale as you perform this movement. After holding for a second, at the contracted position, bring the rope slowly up to the starting point. Breathe in as you perform this step. Repeat for the recommended amount of repetitions.  Variations: There are many variations to this movement. For instance you can use an E-Z bar attachment as well as a V-angled bar or straight bar. Same as the Triceps Pushdown except with the rope attachment."
    },
    {
      "name": "Drop Push",
      "type": "plyometrics",
      "muscle": "chest",
      "equipment": "other",
      "difficulty": "beginner",
      "instructions": "Position low boxes or other platforms 2-3 feet apart. Move to a pushup position between them, supporting yourself by placing your hands on the boxes. With good posture, drop from the platforms by pressing up and moving your hands to shoulder width, cushioning your landing by absorbing the impact through the arm."
    },
    {
      "name": "Incline Push-Up",
      "type": "strength",
      "muscle": "chest",
      "equipment": "body_only",
      "difficulty": "intermediate",
      "instructions": "Stand facing bench or sturdy elevated platform. Place hands on edge of bench or platform, slightly wider than shoulder width. Position forefoot back from bench or platform with arms and body straight. Arms should be perpendicular to body. Keeping body straight, lower chest to edge of box or platform by bending arms. Push body up until arms are extended. Repeat."
    }
  ];
  searchtext: string = ''

  constructor(private exersiseHttpService: ExerciseHttpService) { }

  onSearch(search: any): void {
    // this.exersiseHttpService.getWorkout(search).subscribe((result: any) => {
    //   this.result = result
    // })

  }
}
