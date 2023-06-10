import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  faTwitter,
  faFacebook,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-author-profile2",
  templateUrl: "./author-profile2.component.html",
  styleUrls: ["./author-profile2.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorProfile2Component {
  twitterIcon = faTwitter;
  facebookIcon = faFacebook;
  githubIcon = faGithub;
  linkedinIcon = faLinkedin;
  instagramIcon = faInstagram;
}
