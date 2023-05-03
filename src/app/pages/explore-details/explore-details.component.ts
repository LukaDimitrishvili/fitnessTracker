import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExploreDetailsService } from 'src/app/services/explore-details.service';

@Component({
  selector: 'app-explore-details',
  templateUrl: './explore-details.component.html',
  styleUrls: ['./explore-details.component.css']
})
export class ExploreDetailsComponent {
  workout: any

  constructor
    (private route: ActivatedRoute,
      private exploredetail: ExploreDetailsService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.exploredetail.getWorkoutDetail(id).subscribe((workout) => {
        this.workout = workout
      })
    }
  }
}
